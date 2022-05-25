import Avatar from "./components/Avatar";
const App = () => {
  const listImgs = [
    {
      id: 1,
      path: "https://randomuser.me/api/portraits/women/1.jpg",
      nam: "Maria",
      size: "small",
    },
    {
      id: 2,
      path: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "Pedro",
      size: "",
    },
    {
      id: 3,
      path: "https://randomuser.me/api/portraits/lego/1.jpg",
      name: "Lego",
      size: "large",
    },
  ];

  return (
    <div>
      {listImgs.map((img) => (
        <Avatar key={img.id} path={img.path} name={img.name} size={img.size} />
      ))}
    </div>
  );
};

export default App;
