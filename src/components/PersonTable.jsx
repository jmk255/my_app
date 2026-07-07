import "../styles/PersonTable.css";
//부모컴포넌트에서 전달한 persons객체를 props로 전달받음
function PersonTable(props) {
  //props로 전달받은 persons배열을 map으로 순회
  let trlist = props.persons.map(person => 
    <tr key={person.id}><td>{person.name}</td><td>{person.age}</td></tr>
  )
  return (
    <table className="PersonTable">
      <tbody>
        <tr key={0}><td>이름</td><td>나이</td></tr>
        {trlist}
      </tbody>
    </table>
  )
}

export default PersonTable