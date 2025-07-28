
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
        <p>첫번째 방법</p>
        <ul>
          <CoreContent
          title={CORE_CONCEPTS[0].title}
          content ={CORE_CONCEPTS[0].description}
          />
          <CoreContent
          {... CORE_CONCEPTS[1]}
          />
        </ul>
        <p>두번째 방법</p>
        <ul>
          {contentList.map((item, index) => (
            <CoreContent
              key={index}
              title={item.title}
              content={item.content}
            />
          ))}
        </ul>
        <h2>Tab Menu만들기</h2>
    </div>
    </>
  )
}

export default TabMenu;
