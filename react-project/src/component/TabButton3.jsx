
function TabButton3({children,onSelect,isSelected}){
  console.log(isSelected);
  console.log(onSelect);
 return  <div>
      <button className ={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
  </div>
}
export default TabButton3;
