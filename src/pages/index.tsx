// @ts-nocheck
import { GetServerSideProps } from "next";
import { ChangeEvent, useRef, useState } from "react";
import Card from "../components/Card";
import CheckBox from "../components/CheckBox";
import CheckBoxOrder from "../components/CheckBoxOrder";
import Opacity from "../motion/Opacity";
import { RepoProps, SelectedFilterProps } from "../types/global";
import {
  Header,
  IconArrowUp,
  ListCard,
  NavListFilter,
  Search,
} from "../styles/stylesHome";

interface Props {
  dataRepoList: RepoProps[];
}

const itensFilter = {
  language: "JavaScript",
  description: true,
  homepage: true,
};

export default function Home({ dataRepoList }: Props) {
  const [search, setSearch] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<string[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<SelectedFilterProps>({});

  const staticRepoList = useRef<RepoProps[]>(dataRepoList);

  const filteredData = staticRepoList.current
    .filter(function (repo) {
      return compareString(repo.name, search) && !handlerSelectedFilter(repo);
    })
    .sort(compareLanguageOrDate);

  function compareString(a: string, b: string) {
    return a.toLowerCase().includes(b.toLowerCase());
  }

  function handlerSelectedFilter(repo: RepoProps) {
    const check: boolean[] = [];

    Object.entries(selectedFilter).forEach((keyForm) => {

      if (
        repo[keyForm[0]] as string === keyForm[1] ||
        (keyForm[1] === true && repo[keyForm[0]])
      ) {
        check.push(true);
      } else {
        check.push(false);
      }
    });

    return check.some((elem) => elem === false);
  }

  function handleInputText(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function compareLanguageOrDate(a: RepoProps, b: RepoProps) {
    let comparison = 0;

    selectedOrder.forEach((item) => {
      if (item === "pushed_at") {
        const bandA = new Date(a.pushed_at);
        const bandB = new Date(b.pushed_at);

        if (bandA < bandB) {
          comparison = 1;
        } else if (bandA > bandB) {
          comparison = -1;
        }
      } else if (item === "language") {
        const bandA = a.language?.toUpperCase();
        const bandB = b.language?.toUpperCase();

        if (bandA > bandB) {
          comparison = 1;
        } else if (bandA < bandB) {
          comparison = -1;
        }
      }
    });

    return comparison;
  }

  return (
    <>
      <Header id="#sentinel">
        <div className="container">
          <h1 className="label">nvpc</h1>
          <span className="label">Desafio</span>
        </div>

        <Search
          type="text"
          placeholder="Pesquisar no repositório"
          value={search}
          name="search"
          onChange={handleInputText}
        />
      </Header>
      <NavListFilter>
        <div>
          <p className="label">Filtros:</p>{" "}
          {Object.entries(itensFilter).map((item) => (
            <CheckBox
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
              name={item[0]}
              value={item[1]}
            />
          ))}
        </div>
        <div>
          <p className="label">Ordenar:</p>
          <CheckBoxOrder
            selectedOrder={selectedOrder}
            setSelectedOrder={setSelectedOrder}
            name="last commit"
            value="pushed_at"
            key="pushed_at"
          />
          <CheckBoxOrder
            selectedOrder={selectedOrder}
            setSelectedOrder={setSelectedOrder}
            name="language"
            value="language"
            key="language"
          />
        </div>
      </NavListFilter>

      <ListCard>
        {filteredData.map((repo) => (
          <Opacity>
            <Card
              key={repo.id}
              {...repo}
              name={repo.name}
              language={repo.language}
              description={repo.description}
              homepage={repo.homepage}
              pushed_at={repo.pushed_at}
            />
          </Opacity>
        ))}
      </ListCard>

      <a href="#">
        <IconArrowUp />
      </a>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://api.github.com/users/LuanCarlosCar/repos");
  const dataRepoList = (await res.json()) as RepoProps[];

  return { props: { dataRepoList } };
};
