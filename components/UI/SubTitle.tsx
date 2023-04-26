const SubTitle: React.FC<{ title: string }> = (props) => {
  return (
    <h2 className="bg-transparent text-primary-text font-semibold text-xl">
      {props.title}
    </h2>
  );
};

export default SubTitle;
