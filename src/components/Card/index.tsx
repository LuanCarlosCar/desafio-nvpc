import moment from "moment";
import { Container, Navbar, Title } from "./styles";

interface Props {
  name: string;
  language: string;
  description: string | null;
  homepage: string | null;
  pushed_at: Date | string;
}

export default function Card(props: Props) {
  const { name, language, description, homepage, pushed_at } = props;

  const text = description ? description : "Repositório sem descrição.";

  function renderLink() {
    if (!homepage) return;
    return (
      <Navbar>
        <p>Site:</p>
        <a href={`https://${homepage}`} target="_blank">
          {homepage}
        </a>
      </Navbar>
    );
  }
  return (
    <Container>
      <div className="flex-between-center">
        <span className="date">{moment(pushed_at).format("DD/MM/YYYY")}</span>
        <p className="description blue-linear-gradient">{language}</p>
      </div>

      <Title>{name}</Title>

      {renderLink()}

      <p className="description">{text}</p>
    </Container>
  );
}
