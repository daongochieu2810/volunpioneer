import './Card.css';
function CategoryCard({ card }) {
  return (
    <div
      className='card'
      style={{
        backgroundColor: "#F3F3F3",
        borderRadius: 10,
        padding: 20,
        cursor: 'pointer'
      }}
    >
        {card.icon }
      <p
        style={{
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "25px",
          lineHeight: "29px",
          color: "#000000",
        }}
      >
        {card.name}
      </p>
      <p style={{
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "20px",
          lineHeight: "23px",
          color: "#000000",
      }} >{card.desc}</p>
    </div>
  );
}

export default CategoryCard;
