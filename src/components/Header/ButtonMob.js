import React,{useState, useEffect} from "react";

export const ButtonMob = () => {

  const [visible, setVisible] = useState()

  const openMenu = () =>{
    if(visible === 'inline-block'){
      setVisible('none');
      
    }
    else{
      setVisible('inline-block');
      
    }
    document.querySelector(".nav").style.display=visible
  }
  useEffect(() => {
    openMenu();
    
  }, [setVisible])

  return (
    <div className="buttonMob" >
      <img src="/img/Logo.png" />
      <img src="/img/botaomobile.png" onClick={() =>openMenu()} />
    </div>
  );
};