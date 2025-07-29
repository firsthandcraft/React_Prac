
import { CORE_CONCEPTS } from '../js/data';

function TabMenu() {
    const reactDescriptions = ['Funsdamental','Crucial','Core'];
    const contentList = [
      { title: 'title1', content: 'content1' },
      { title: 'title2', content: 'content2' },
      { title: 'title3', content: 'content3' }
      ]
  function getRandomInt(max){
    return Math.floor(Math.random()*(max+1));
  }
  function CoreContent(params) {
    return <li>
        <p>{params.title}</p>
        <span>{params.content}</span>
    </li>
  }
  return (
    <>
      <div>
        <h3>{reactDescriptions[getRandomInt(2)]}</h3>
        <p>this is TabMenu PROPS</p>
        <h1>첫번째 방법</h1>
        <ul>
          <li><i>직접 배열에서 가져오기</i> </li>
          <CoreContent
          title={CORE_CONCEPTS[0].title}
          content ={CORE_CONCEPTS[0].description}
          />
          <li><i>...으로 불러오기</i></li>
          <CoreContent
          {... CORE_CONCEPTS[1]}
          />
        </ul>
        <h1>두번째 방법</h1>
        <ul>
          {contentList.map((item, index) => (
            <CoreContent
              key={index}
              title={item.title}
              content={item.content}
            />
          ))}
        </ul>
        <h1>세번째 방법</h1>
          <ul> {contentList.map((item,index) => (
            <CoreContent key={index}
             {...item}
            />
          ))}
          </ul>
    </div>
    </>
  )
}

export default TabMenu;
