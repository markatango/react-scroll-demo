import { ScrollBox, FastTrackMode } from 'react-scroll-box'; // ES6
import './App.css';

const style={
  textAlign:"left"
}

function App() {
  return (
    <div className="App" style={style}>
      <ScrollBox style={{width: '50%', height: '200px'}} fastTrackMode={FastTrackMode.GOTO} >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec porta mauris, non tincidunt eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam hendrerit sem eget ullamcorper consequat. Duis ornare leo lacus, at elementum orci dapibus finibus. Cras et bibendum felis. Mauris in dapibus ante. In commodo nec ipsum non sagittis. Pellentesque molestie rhoncus molestie. Donec ex neque, commodo eget dapibus vel, suscipit vel tellus.
      <hr></hr><br />
        Fusce dictum lacinia velit. Aliquam cursus magna lectus, at placerat orci malesuada id. Nunc tincidunt molestie turpis non porttitor. Aliquam erat volutpat. Cras non sodales diam. Aliquam vel erat nisi. Nam ultricies feugiat vulputate. Morbi sagittis sem vel ultricies pulvinar. Ut aliquam dignissim laoreet. Etiam eget felis gravida, interdum erat congue, consectetur justo. Praesent tincidunt quis nibh id convallis. Sed consectetur ac augue a consectetur.
        <hr></hr><br />
        Phasellus vel ligula lobortis, viverra est non, volutpat mauris. Praesent a vulputate diam. Aenean rhoncus turpis ligula, at auctor nulla fermentum ut. Proin erat lorem, cursus eu rhoncus vitae, placerat id nulla. Mauris vel commodo enim. Cras porta convallis placerat. Nam dui nunc, mollis ac tellus in, feugiat euismod ligula.
        <hr></hr><br />
        Maecenas bibendum euismod massa at lacinia. Aliquam erat turpis, semper volutpat quam nec, interdum rhoncus justo. Praesent dictum leo augue, eget congue felis egestas eu. Suspendisse rhoncus, ligula ac aliquam ornare, ipsum magna pellentesque orci, sed bibendum velit ligula eu nisl. Sed scelerisque ultrices iaculis. Morbi vitae libero viverra nisl efficitur condimentum. Donec quis nunc a dolor pulvinar volutpat ultrices sit amet ex. Duis dictum, magna eget aliquet tristique, turpis augue vehicula lectus, ut luctus ligula ligula eu est. Nunc malesuada rutrum tincidunt. Nullam consectetur mi sit amet viverra vulputate. Suspendisse commodo fringilla odio, ac ornare enim condimentum sed. Phasellus dictum nunc purus, nec tempus est feugiat non. Nulla urna libero, interdum et tristique et, mattis imperdiet mauris. Vivamus pretium congue quam pharetra facilisis. Praesent imperdiet, nisi vitae semper feugiat, lorem purus dignissim enim, eget luctus ligula nisl feugiat diam.
        <hr></hr><br />
        Vestibulum tincidunt ipsum non velit euismod efficitur. Donec pellentesque sapien ut ullamcorper malesuada. Nulla facilisi. Morbi vel enim tincidunt, vestibulum est vel, consequat leo. Proin eu porta enim, vel mollis ex. Suspendisse at elementum ligula, a tempor tortor. Nullam id ex sed nisi suscipit ornare a eget dui. Integer luctus tristique nisi, a convallis lorem feugiat vel. Nunc metus erat, luctus vel ullamcorper eu, molestie non orci. Curabitur iaculis varius ante id viverra.
      </ScrollBox>
    </div>
  );
}


 


export default App;
