
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom' 

 export default function ScrollToTop(){
 	const { pathname } = useLocation();

 	useEffect(() => {
 		document.documentElement.scrollTo({
 			top: 0,
 			left: 0,
 			behaviour: 'instant'
 		});
 	}, [pathname])

 	return null;
 }