import schoolImg from "../../public/school.jpg";

const Card = () => {
  return (
    <div>
      <img
        src={schoolImg}
        alt="school"
      />
      <h2>Card Title</h2>
      <p>Card Description</p>
      <button>Click</button>
    </div>
  );
};
export default Card;
