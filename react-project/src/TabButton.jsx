export default function TabButton({children,onSelect}){
  // document.querySelector('button').addEventListener('click',() => {})

  return <li>
    <button onClick={onSelect}>{children}</button>
  </li>
}
