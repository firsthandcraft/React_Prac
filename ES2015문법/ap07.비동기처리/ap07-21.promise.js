function workP(sec) {
    //promise의 인스턴스를 리턴하고 then에서 리턴한 것을 받는다.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //promise생성시 넘기는 callback=resolve,reject
            //resolve:동작 완료시 호출 ,reject:에러 났을 경우
            resolve(new Date().toISOString());
        }, sec * 1000);
    });
}
workP(1)
    .then((result) => {//성공했을때의 then함수 호출
        debugger;
        console.log('첫번째 작업', result);
        return workP(1);
    })
    .then((result) => {
        console.log('두번째 작업', result);
    });
