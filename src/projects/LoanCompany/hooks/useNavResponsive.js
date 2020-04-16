import { useState, useEffect } from 'react';

function useNavReponsive() {
  const [navResponsive, setNavResponsive] = useState(false);

  function handleNavResponsive() {
    if (window.innerWidth > 992) setNavResponsive(false);
    else setNavResponsive(true);
  }

  useEffect(() => {
    handleNavResponsive();
    window.addEventListener('resize', handleNavResponsive);
  }, []);

  return navResponsive;
}

export default useNavReponsive;