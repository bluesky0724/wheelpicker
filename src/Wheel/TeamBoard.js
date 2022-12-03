import React, { useEffect, useState } from "react";
import ImageUploading from "react-images-uploading";
import Modal from 'react-modal';

import "./style.css";

export const TeamBoard = ({images, setImages, choosenItem, setChoosenItem, savedItem ,setSavedItem, setCountArr, countArr}) => {

  const [newText, setNewText] = useState('');
  const onChangeText = (event) => {
    setNewText(event.target.value);
  }

  const genderimg = [
    [
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADGUlEQVRoge2Zy0tVURSHf0sNexgRJQ6EHhOzUWE06CEWDZpoNItGQQRZEP0DDcJBQa9RQRFRENGsoGH0mBRF5aAcRAmZmpFFohna06+B1+v2cLye5z0p94ML+66991q/dc9+3X2kEiVKFMKyCArUStocsPl7M3uepp7IALsJztUgPsvSFl0sKjKKOyip3cdeL2lRkbUkC7Af+DurhxawX9JlxdCTeSI+SfRKuh7WT6aJTJPEdknvwvpKbLIDZZI2SqqTVCNpTFK/pGdm1unT/oCkS5pMokfSNjPrApKSFRygGjgHfCqwF7wFjgILJpLwTOxuYLXj83jYyR43iYPAtxCbWydwslASUROJdEQBTNJ5SYc9VT8lvZDUJ6lS0kpJ6wrEyQ8nj/8WSc25r0/M7FoUnTMCtHl+6Y9AK1Dl07YWOA2Mevr0ep9EUQF2AmOOoIfAsgD9GnLiJ/gCVBdDs5+YcuCVI6YdWBii/1pgyOl/MU29hYQ0OyJ+A/URfLQ6PkaA5WlonUnEFUfEjYg+KjxDbF8S2sLu7E1O+VaUgGb2R9Idx9QYxY+XwInkltxax9QRI67bd0UMP3nCPJEFkuY73wdjxB1wykti+MkTOBEzG5E04pjiTNIap/wlhp88YedIj1PeECNug1PujuEnT9hE7jnlPVEC5vadFsd0P4qfWABNzrI5BgS90nF9HHN8DAKL09AaRMgjR0hXmGMG0Aj8dPq3pal1JjENwA9HzGugLkC/XUw98ndm9jQcUYeYyihwCljjaVcObAVuedoPA3EWi+QAjuB/fdMHPAVeAgM+9QPApqz1TwHYArzxETsdd4FEdvLEASqBfcBjxk/EXoaB28COrLUGBqgCHjhJnACKci2b6L2WmX2XNOSYPudOu6mT+U1jUpQS+d+I9eoN2CvpgsdcJWlerjyi8bsul/Vm1qOEibuiVEpaWqB+Ye7jksooKA0tSWL8Ym6Vx3xG0rZc+aykm576DjP7FSeuH7GGlpl9lfTVtQHuf/kPZub3rjBx5szQmjOJpHEO6tfkq7OhQg1LlJgF/AOj0YnSHAl60AAAAABJRU5ErkJggg==',
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADA0lEQVRoge2Zy0tVURjF11aza2FFUZmREU1CjEhqWg4KDArtMWlmEFQEElEETSRqaPQv1B9gIRLaiwhSbGhKNC2zl2GBGZbpr8G5wr6He47nsa9X4y648LEf61vr7HP3/s45UgkllFDCcoJZrETACUkXUtIMGWOu5OuoSEkcB3WSDqXkCNRblpJ4yWAxV+SZpHMRx2Yk3ZC0rnByCgygEughP54HzVtStxaQkdQt6ajVPFEkOckQsBJ9wPllsyJApaQu5a7EI0mtkqajcBTdSJgJY0wkE1KRjbgyIRXRiEsTUpGMuDYhOTgQgZWSaiTVSpqSNG6M+RQyPiPpgaRmq7lP0vGkJhID2AJcBfqB2TwH1xhwD2jyzcsAvb6xvVlzQbnaomy/cQ1UAzeBnwEnbz68AhqTmCiIEWAn8CZA7N/sKkwG9M8Aw3FNODcC7AW++YSMAteBBqDMGrsWOAl0AXMBxiKZcGoEqAHeW2SzQAdQFWHuPmDEZ2I4qoksx27gWvZ3Oo2RJ5aIaeBYzPnVwGOLYwZoTCwoCYAjvqvZlpBnjW9lBh1LXVDAoJW8OyXXft9/5oArnQslrvMlbnDAed/iu+tAZqSkF62krx1xnrI4P7jgnEdYrbXLip86ymfzbAVqHPGGGqm14lEXyYwxPyRNWk2bXfBK4UZWWfEvVwnlFZbzWPAsioowI5+t2MktAFRI2mg1fXTBK4UbGbPi1DtWFvWSyrPxrHIvViqEGXlhxc1xyooQtFjxgDHmjwPOcAArgAlru2xPyVeFV2jO47IrrVGS37YSfwUS7zLALYtrMg1XkuQbgO+WgJd4j7ZxeVrJfZLsKITehUScIRf9ca4mcBb4bc0fBlYXUnOYmDs+M+NAe9gGAOwBHuaZt6MQGiN9sQLKJXVKuuTrmpL3BmRE0hd5B9x2eR906n1j30lqMcYMpRHsBNnbbIL46AU2FVt/DoD1QGcEQ3PAAHB4MXQl/hiKV24clNQkaZu8AnBKXkXwVlKPMcZpqV5CCSWU8P/gHzFaRVdBoBoVAAAAAElFTkSuQmCC',
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACvklEQVRoge2aPWjUYBjHn9dW6Q1eqR+gFhGhWrDKObsoxckPBHdFB3FUF50tOEoHkU4iOjuJiF/D6aBSCq0uCh3UUyiod1Xxag9bfg6Xg6e5S5q8eeMdR34QSEKe////JHnvTcKJZGRkhGHSEgbWi8h2Ednq7ZoTkZIx5ndans4A+oFLwHNgiWaWgCJwEehvd94mgF6vge8twgfxDbgA9LY7v4iIAAPA04CwVWDWW6oBxzwBBtrdxGbgvS9YGbgKFFocXwDGgIqv5h2wqR09CLAOeOELdCvK2fWu4m1fbRFY+z+y+8Nc8wW5bKFxxacxlkbWsACDwIIKcCOB1k2lUwW2ucy6mvm4Mv8I9CXQygElpXfdZdYwYwN8UsbnHGieV3ofXOSMYlpQpn+BDQ40N3paDfbF1Vhj4btbrc8YYyoWGiswxpRF5G2ARyRsGtGD8YtFfRBaazBusU0jemDXLOqD+KPWc3GLbRr5qta3WNQHoa/0XNxim0ZKan0vDh76PI0RtetzUs0opjnfZHjIgeaob1K0npfiGj9Qxg8d6D1SevddZIxqrM8gwLEEWid8WgddZo0SoKjMfwB7LDRGgJ9K51kaWVcLsROYVyHKwGiM+sNeTYMKsCPNzGFhjgM1FWYZuAMMhdQMAXe9YxvUgKNJsiT+igIcEZF70jyJvRGRl1KfE4zU55wDIuJ/c1wQkZPGmMdJsyTGu9dfE59XNmMrVYAe4DQwGaGBSeAU0NPu3KEAw8BZYEqFnwLOAMPtzhcbVr5JjqfpZfOs1ZFkjXQaXdOIkw/IQF5EWv2U6sfxPlp/hVw2xvxykSMxwLTFZNhg2kWGrrm1uqYRJwB56l/Y/cuEuoUmAo7Ju8jgZLAHDVZgUW0uGmPmXfi1omturayRTqNrGkntDwMiIsB+Ednlbc4aY2bS9MvIyAjmHy9xBI10WO8HAAAAAElFTkSuQmCC'
    ],
    [
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEgElEQVRoge1ZXWgcVRT+zh03a2KDSFpCiH8PWkQQpbaCSrV9UTQoCoJ/YDCb2YmmiubBnwdlqQ8+RCHExmXvTBZBRViKYkV8aIUqiKC2Lz6oVKy2ulL/kuhSNdk9x4fMJNPtbHZ+Nk0s+8HAueeee875uD9z5wzQRhttrARai6D5fL4/lUrdEMaWmb/PZrOfN7M7J3la0ZFKpbaJSCmMrVLqNQAPN7VLmtR6wZrMiIjMAjgU0HUFgPPi+FwTIqZpHgSw1a9zHGdIROy4PtfF0vKRiJ3PmhMJIHFcRF6P6mdNiQSRYOadRPRdVF8t2yO5XE719fVtMwxjM4BeZmYAJ5j5s5GRkSP19o7jDItIAcskjgHYYVnWUduOvlUSEykWi5uq1eqzRPQAgF4RAQAQLb5rDcOA4zhHmHmqUqnosbGxvxuRME3zaNw8EhFxHMeq1WrjRNS9kp2IXE5EE93d3bts294rIk+hhSSAmEREhKanp/eIyKN1Xf8C+ALATwDSAC4BcDWWr0KXAXjGZx9IgogOiYgGAGb+NExOse5atm3vBvCcT/WziOxeWFh4Y3R0tOK3zefz/YZhPEFEuwCc6+v6EcBNSWfCQ2QiWutbiegD39iDHR0d9wwODv6+0rhCobBFKfUugAtd1W+GYVw5NDT0a9QcghDp+C2VSgYRjWOZxGFmHmhGAgAsyzoM4BYR+dNVbaxWqy9ES7cxIhGZnZ29DcBVbrPKzA9alnUy7HjTNL8C8LTXJqKHCoXCxig5NELUF+LdPrlkWdbXUQOWy2UHi/sDADoNwxiI6iMIkYgQ0c2eLCJvxwmYy+WqRLTP52d7HD/1CE1ERAhAv0/1ZdygzOwfe3FcP36EJqK17oTv+KzVarMJ4v7hk89P4GcJoYm4m3ppY6fT6SSbtNcTROTMH79YfBMDAJj52thBldrik3+I6+cUn1GMReSAJzPzvXECFgqFLhG5w+fzwzh+6hF1RvZ6AhHdrrUOVdLxg4jGAPS4zTml1P6oPoIQiUg2m/0IwCdeTkqpN4vF4qaw423b3k5E/jvaZCaT+StKDo0Q+QuRmR/H4i0XInJprVb7WGu9udk4rfWdAN4H0OGqvlVKjUeN3whxb7+PAHjVp/oHwCtKqelMJvONpyyVSsbMzMz1SqkxnHorqGDx+h5UEoqF2CVTrfVjRDSB02e1TETHRaQTwEUALqjrn1FKDWQymVDfGWGRqPbrOM6NIlIE0HRpudjPzMOWZR1rbhoNiYvYk5OT6a6urvtEJAvgOpz+1VkRkQNKqT3Dw8MtOWqD0NJq/NTU1IZUKrWPiHYCgIi8WC6Xn8/lctVWxglCS+ta7mfunNcmol/OBAlgHVQaW4U2kfWGRJvdtu37AUzVqTcASLnySbi3AA/MfM1qHL+JKo0ikiai+heeH13uswRmXpVVcNYsrUQzkk6n35ufn99ap34JwA5XfhnAW/7Onp6ecpKYjdDy39Na63eI6C63+aRpmhOtjhGEs2ZpnTVEVuOv7gkA3q+zuZUM22jjf4D/ADfbmWF1i3pDAAAAAElFTkSuQmCC',
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEb0lEQVRoge2ZT2gcVRzHP+9l8mdjI41SGptYD160VkSQVhDUQ4UqSqvUnkLDNjs75qZBRK3QqNCDxAo5CJuZZXpRcCXa2ktKq9SLWKVCaZTeRG1q69+uMf6dvp8Hd9tJyE5mdqdJlP2e3vvN731/78N7b3ZmB5pqqqmm/ktSS1XIdd3HgKEGbU7Ztv30QhesBo2TaD2wpUGPmvPVDRqvGC3Zihhj3tdaOzHTO4AXgdVx/ZcMxHGc08DpxfJKpVJbuVyeIAEErLCt5ft+R7lcPgQ8HAr/FGfsigEplUptQRC8DWwNhY+IyJ4441cESGg7hVfiiGVZ24E/4ngsO0gURDabjQUBywySFgQsI0iaELBMIGlDQAq/I2NjY+2dnZ09Sql1xphZY8z3juN8Wyu/cot9l7l3p0nLsh6tFwLqBCkUCjdorfuB7cDdIqJFBACtNa7rngOOAb5t28fDEEEQpA4BCUGKxWKXiDwjIk8B10SkrgN2Abtc1/3EGDPU1tb2xdWCgAQghULhZmPMYeDWBS5fAi4A1wKr5l3bpLU+EQTBGWBjKJ4aBMQ87J7n3am1PsFciLPAHqXU7dPT0222bffatt1ljFktIjuAdwCp5FpXE6JaIFK+7/cEQXAIuL4SMsBLMzMzrwwPD/8+P99xnDIwAUwUi8W7jDEHgNtCKVNJIETkJPAsgFLq61p5i74huq57lCsvRH8qpR7P5XKH40wC/j1XxpgJ4IFKKDDGbHYc57O4HnEUubXGx8cfJPRWJyJPJIEAGBwcnMlkMjuAzyshq6Wl5fXEM11EkSBa673VtlLqvXw+f6CeIv39/b+ISJbKmRGRzZ7n3VuPVy3VBCkUCutFZFMoFOtxupby+fynwMFqX0R2N+I3XzVBtNaPcOUMnc7lclMp1Hsz1G70j4g5qgkiIreE2sfSKGZZVtin1/f9njR8IQJEKbXucpLW36RRLJvNXgRmqn1jzNo0fCH6sHeG2r+lVRCYrTaMMZm0TKNW5Hy1LSKpbIGRkRELWFPtG2POpeEL0WdkOtTdWCsviXp7ezcALZXupe7u7vNR+UkUtbU+DLW3+r7fkUK9baH2Rzt37vwrBU8gAsQYcxz4udJdFQRBvpFC+/fvzwCXPUTkYER6YtUEcRznb6WUHwq94Lpu3XeZrq6uPUBfpfurUuqNer0WUuQjSmtr6z7gYqW7BpgYGxtrT1rE87ztwHOh0Kht2xeS+kQpEmRgYOBHYDgUuieTyXyQZGU8z8uJyFuhWlPt7e2jyacarVgfelzXfQ14MhT6AXjZsqzxWu8VxWLxDmPMPuCheeM22bb9Zb0TrqVYIKVSqaVcLo8yFwZgVik1KSJTwAURySilbhKRLUqpDfNyv9JabxscHDyVxsTnK9GnN9d1s8CrQHfCOpNBEAwMDQ19l3BcbCX+huh53nUi8jywm2ggAT4G9tq2fbTO+cVW3R9DR0ZGrL6+vvuA+0XkRmCtUmq28kRwBjhs2/bZtCbaVFNNNfX/0j+iDLITVlOLeQAAAABJRU5ErkJggg==',
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEZElEQVRoge1ZXWgcVRT+zp2d0BScEotQu1F80PYhahURIVoDUhFFUSLEhwbiZvanJBZ0jQqKdUErIlgF2407s7siBB+WKL74IFqxraSCCK0PUqkvtiUBqa2zSLa6u/f44Gw7LJNN5s4shLDf0z1nzvnO+Wbu3Zl7F+ihhx46gbpFXCqVriOim6SUNwKAEGKpVqudm56e/rsb9SIVUigUtmiaNsnMTwG4H4DWFtIE8D2AL6SUH2cyGSeq2pEIyeVyscHBwf3M/BqArWtMu8jMby0uLh7J5XKNsD2EFpLP5wd0Xa8A2ONzeRnAojveDmCzT8zX9Xr9mampqcth+gglpFwu39BsNk8A2OlxX2Lmw5qmfW6a5mlvfKlU2iWlfBrAcwAGPJfOSCl3ZzKZi6q9KAupVCp9juN8A2B3y8fM5UajMbPa3c3n8wN9fX2HmPlZj/uYlPLhTCZTV+knppIEAI7jvAGPCCJ6JZVKvbuWXFdowrKsM0T0juseEUK8DuCASj9KT2R2djYei8XOAugHAGY+nE6n96twFYvFI8w85ZrLQojbTNNc7JjkA6FSPBaLzcAVAeB3XddfUuEBgGq1OgPgvGtuZuYXVXgCC2FmAjDqsQ8mEokrKsUBIJvN1ojooMc1umJwBwQWUi6X7wRws2s2hBCfqRT2Qtf1eQANAGDmWwqFwh1BOVSeyA6PeSqZTF4KytGOiYmJPwH83LKJaEeHcF8EFiKl3N4aM/OFoPkrgYgueMbxoPkqi32Tp+A/Cvm+YOaaZ9zfKdYPgYUQ0R8ec1vQ/A64+qSJaClosoqQcx7z9lwup/xSbcHlGLralBDnO4T7IrCQarW6AKA1DbbG4/EHgnK0Ix6PPwjgetdcFkKcDMoRWEg2m60x87ctm4heDsrhAy/HUZX3ktKbnYgOtcbM/KhlWY+r8ACAbdtPAnjEw/eeUk8hGvgOwIhrOpqmDU9OTv4ShMOyrCEAC0RkuK6jqVTKb1+zKpSeiIsEgL/c8ZZms3nCtu2H1ppsWdYeIjruEXGZiEzVZkJtrIrF4hPMPA+gz3VJAHNE9GYymfxthZxbpZQHiGgvrt3If4loNJlMfqnaS+itrm3bjwGYx7WvYQAAM58mogUAS0REzLyNmYeJaFcbxTIzj6bT6a/C9BHJ4YNlWUNCiBIz3xcw9QdN08yga8sPkR0HVSoVzXGcvfh/P37vKuE/EtGHhmF8OjY21oyiflcO6Eql0k4p5TCAaQD3uO6f3EOJk6Zp/hp1za6dNAKAbdvvA3jeNT9IpVIvdKtWmJ/fdYWekPWGDSMk9F4CAObm5oxqtdp+8g54dpMANuXz+YH2AMMwmuPj49WwPUQipFarHdN1/a5Vwvbpur7PJ/cUgLvD9rBhptaGERLJ1Orv7x/xWyO6rr8NoDWdPqrX66+2xxiGEcknSiRCVlqstm17t6xXwv6Z0wkbZmr1hKw3bBghkSz2lcDMnwghFgBASnm2m7V66KGHzvgPe9d0eQXbueoAAAAASUVORK5CYII=',
    ],
  ];


  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const CheckImage = (item) => {

    const updatedImage = images[item];
    updatedImage.visible = false;
    const newImages = images.map((image,index) => {
      return (index === item) ? updatedImage : image;
    });
    setImages(newImages);
  }
  const unCheckImage = (item) => {

    const updatedImage = images[item];
    updatedImage.visible = true;
    const newImages = images.map((image,index) => {
      return (index === item) ? updatedImage : image;
    });
    setImages(newImages);
  }



  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal(){
    setIsOpen(false);
    setSavedItem([...savedItem, images[choosenItem]]);
    setChoosenItem(null);
  }

  // useEffect(()=>{
  //   console.log(images);
  // },[images])

  useEffect(()=>{
    // console.log('CI',choosenItem, modalIsOpen, savedItem)
    if(choosenItem != null && !modalIsOpen){
      setTimeout(()=> {openModal()},5000);
    }
  },[choosenItem]);

  const saveNewText = () => {
    if(newText == '') return;
    const item = {};
    item.type = 'Text';
    item.content = newText;
    item.gender = 1;

    const newItems = images;
    newItems.push(item);
    console.log(item)
    setImages([...images],item);
    setNewText('');
  }

  const setGender = (order, gender) => {

    const newImages = [];
    images.map((item,index)=>{
      if(index === order){
        newImages.push({
          content: item.content,
          type: 'Text',
          gender: gender,
        });
      }else{
        newImages.push(item);
      }
    });

    setImages(newImages);
  }


  return (
    <div className="App1">

      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg","png"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            {/* <div style={{display:"none"}}>
              <ModalShow />
            </div> */}

            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
              className="myModal1"
            >
              {choosenItem != null ? (
                (images[choosenItem].type == 'Text') ?
                  <>
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Teams are Distributed!</h2>
                    <button className="mybutton1" onClick={closeModal}>Done</button>
                  </>
                :
                  <>
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{images[choosenItem].file.name}</h2>
                    <div>
                      {<img src={images[choosenItem].data_url} />}
                    </div>
                    <button className="mybutton1" onClick={closeModal}>Done</button>
                  </>
              ):<></>}
            </Modal>

            <div className="StyledBox-sc-13pk1d4-0 hHTEjb">
              <div className="StyledBox-sc-13pk1d4-0 drhcvl">
                <input type="number" min="1" value="1" className="MainInput__WeightInput-sc-1kepopg-1 celskH"/>
                <div className="StyledBox-sc-13pk1d4-0 drhcvl">
                  <div className="StyledTextInput__StyledTextInputContainer-sc-1x30a0s-1 imHyBg">
                    <input autocomplete="off" placeholder="Input text here..." style={{height:"40px"}} className="StyledTextInput-sc-1x30a0s-0 komyBt MainInput__MainInputData-sc-1kepopg-2 fqFTW" value={newText} onChange={onChangeText}/>
                  </div>
                </div>
              </div>
              <div className="StyledBox__StyledBoxGap-sc-13pk1d4-1 kYgNmH"></div>
              <button className="StyledButton-sc-323bzc-0 iiGFSH MainInput__MainInputButton-sc-1kepopg-0 bZqWsO" type="button" onClick={saveNewText}>
                <svg aria-label="Add" viewBox="0 0 24 24" className="StyledIcon-ofa7kd-0 dwNBBH">
                  <path fill="none" stroke="#000" stroke-width="2" d="M12,22 L12,2 M2,12 L22,12"></path>
                </svg>
              </button>
            </div>
            <br/>
            <div style={{fontSize:"28px"}}>------------------------------------</div>

            <br/>
            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
            <div className="ImageShow">
              {imageList.map((image, index) => (image.type == 'Text')
              ? (
                <div key={index} className="image-item2">
                  <h2 className="myh1">{image.content}</h2>
                  <div className="image-item__btn-wrapper">
                    {/* <button className="img-button1" onClick={() => onImageUpdate(index)}> */}
                    <div className="StyledBox-sc-13pk1d4-0 hKDqav">
                      <div tabindex="0" className={"StyledBox-sc-13pk1d4-0 bUEVSf Icon__Container-sc-dp9rlk-0 kWtXFV mybut10 " + ((image.gender === 1 ) ? "MyselectCSS1" : "")} onClick={() => setGender(index,1)}>
                        <img alt="UnisexIconWhite" src={genderimg[((image.gender === 1 ) ? 0 : 1)][0]} className="StyledImage-sc-ey4zx9-0 jFAHLS"/>
                      </div>
                      <div className="StyledBox__StyledBoxGap-sc-13pk1d4-1 epPYSv "></div>
                      <div tabindex="0" className={"StyledBox-sc-13pk1d4-0 dWdsom Icon__Container-sc-dp9rlk-0 dwKZrN mybut10 " + ((image.gender === 2 ) ? "MyselectCSS2" : "")} onClick={() => setGender(index,2)}>
                        <img alt="MaleIconGrey" src={genderimg[((image.gender === 2 ) ? 0 : 1)][1]} className="StyledImage-sc-ey4zx9-0 jFAHLS"/>
                      </div>
                      <div className="StyledBox__StyledBoxGap-sc-13pk1d4-1 epPYSv"></div>
                      <div tabindex="0" className={"StyledBox-sc-13pk1d4-0 dWdsom Icon__Container-sc-dp9rlk-0 dwKZrN mybut10 " + ((image.gender === 3 ) ? "MyselectCSS3" : "")} onClick={() => setGender(index,3)}>
                        <img alt="FemaleIconGrey" src={genderimg[((image.gender === 3 ) ? 0 : 1)][2]} className="StyledImage-sc-ey4zx9-0 jFAHLS"/>
                      </div>
                      <div className="StyledBox__StyledBoxGap-sc-13pk1d4-1 epPYSv"></div>
                      <button className="img-button2" onClick={() => onImageRemove(index)} style={{height:"30px",border:'0px',width:"30px"}}> X </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div key={index} className="image-item2">
                  <img src={image.data_url} alt="" width="100px" height="40px"/>
                  <div className="image-item__btn-wrapper">
                    {/* <button className="img-button1" onClick={() => onImageUpdate(index)}> */}
                    {(images[index].visible == false) ? 
                      <input className="img-button2" onClick={() => unCheckImage(index)} type="checkbox"/>
                    :
                      <input className="img-button2" onClick={() => CheckImage(index)} type="checkbox" checked="checked"/>
                    }
                    <button className="img-button2" onClick={() => onImageRemove(index)}> X </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </ImageUploading> 
    </div>
  )
}
