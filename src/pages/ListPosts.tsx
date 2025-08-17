import ListForm from "../components/ListForm";

export default function MainPage() {
  return (
    <div className="container">
      <div>
        <h2>Список постов</h2>
        <ListForm />
      </div>
    </div>
  );
}