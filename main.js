let body =document.querySelector('body')
body.style.display='flex'
body.style.background='black'
body.style.height='100vh'
body.style.justifyContent='center'
body.style.alignItems='center'
let ism =prompt("Ismingizni kiriting:")
let title=document.createElement('h1')
title.textContent=ism
title.style.fontSize='50px'
title.style.color='white'
body.append(title)