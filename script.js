function code()
{
    var boutonT=Array();
    var boutonR=Array();
    boutonR[1]=document.getElementById('res1');
    boutonR[2]=document.getElementById('res2');
    boutonR[3]=document.getElementById('res3');
    boutonR[4]=document.getElementById('res4');
    boutonR[5]=document.getElementById('res5');
    boutonR[6]=document.getElementById('res6');
    boutonR[7]=document.getElementById('res7');
    boutonR[8]=document.getElementById('res8');
    boutonR[9]=document.getElementById('res9');
    boutonT[1]=document.getElementById('but1');
    boutonT[2]=document.getElementById('but2');
    boutonT[3]=document.getElementById('but3');
    boutonT[4]=document.getElementById('but4');
    boutonT[5]=document.getElementById('but5');
    boutonT[6]=document.getElementById('but6');
    boutonT[7]=document.getElementById('but7');
    boutonT[8]=document.getElementById('but8');
    boutonT[9]=document.getElementById('but9');
    boutonT[10]=document.getElementById('but10');
    boutonT[11]=document.getElementById('but11');
    boutonT[12]=document.getElementById('but12');
    boutonT[13]=document.getElementById('but13');
    boutonT[14]=document.getElementById('but14');
    boutonT[15]=document.getElementById('but15');
    boutonT[16]=document.getElementById('but16');
    boutonT[17]=document.getElementById('but17');
    boutonT[18]=document.getElementById('but18');
    boutonT[19]=document.getElementById('but19');
    boutonT[20]=document.getElementById('but20');
    boutonT[21]=document.getElementById('but21');
    boutonT[22]=document.getElementById('but22');
    boutonT[23]=document.getElementById('but23');
    boutonT[24]=document.getElementById('but24');
    boutonT[25]=document.getElementById('but25');
    boutonT[26]=document.getElementById('but26');
    var next=document.getElementById('next');
    var page=document.getElementById('div');
    var page1=document.getElementById('div2');
    var page2=document.getElementById('div3');
    var page3=document.getElementById('div4');
    var page4=document.getElementById('div5');
    var page5=document.getElementById('div6');
    var rejouer=document.getElementById('rejouer');
    page4.setAttribute('hidden','hidden');
    var niveau=document.getElementById('niv');
    var themeniv=document.getElementById('theme');
    var div=document.getElementById('div1');
    var theme=['metier','corps','couleur','meuble','vetement','fruit','vaisselle','metal','sport','doigt','cotés','pays','continent','ville','animal','langage(pro..)','monnaie','monument','religion','gaz','ocean','pirate','ninja','saiyen','prof'];
    var mot=['avocat','main','rouge','table','culotte','fraise','tasse','bronze','tennis','majeur','droit','gabon','oceanie','montreal','chevre','swift','yuan','panthéon','islam','azote','indien','luffy','naruto','goku','aicha'];
    var motniv;
    var echec=1;
    div.style.background="url('images/"+echec+".png')";
    div.style.backgroundSize="100%";
    niveau.value++;
    motniv=mot[niveau.value-1];
    var tabniv=motniv.split('');
    themeniv.innerText=theme[niveau.value-1];
    for(let i=1;i<=motniv.length;i++)
    {
        boutonR[i].removeAttribute('hidden');
    }
    for(let i=1;i<=26;i++)
    {
        boutonT[i].onclick=function ()
        {
          if(echec<=7)
          {
            var cpt=0;
            for(let j=1;j<=motniv.length;j++)
            {
                if(boutonT[i].value==tabniv[j-1])
                {
                   boutonT[i].style.color="blue";
                   boutonT[i].setAttribute('disabled','disabled');
                   boutonR[j].value=tabniv[j-1];
                }else
                {
                    cpt++;
                    if(cpt==motniv.length){echec++;
                    div.style.background="url('images/"+echec+".png')";
                    div.style.backgroundSize="100%";
                    boutonT[i].style.color="red";
                    boutonT[i].setAttribute('disabled','disabled');}
                }
            }
            var motest="";
            for(let j=1;j<=motniv.length;j++)
            {
               motest+=boutonR[j].value;
            }
            if(motest==motniv)
            {
                div.style.background="url('images/joie.gif')";
                div.style.backgroundSize="cover";
                page1.setAttribute('hidden','hidden');
                page2.setAttribute('hidden','hidden');
                page3.setAttribute('hidden','hidden');
                page4.removeAttribute('hidden');
                for(let j=1;j<=26;j++)
                {
                    if(j<10)
                    {
                        boutonR[j].value="";
                        boutonR[j].setAttribute('hidden','hidden');
                    }
                    boutonT[j].style.color="black";
                    boutonT[j].removeAttribute('disabled');
                }
            }
          }else
          {
            page1.setAttribute('hidden','hidden');
            page2.setAttribute('hidden','hidden');
            page3.setAttribute('hidden','hidden');
            page5.removeAttribute('hidden'); 
            div.style.background="url('images/perdu.gif')";
            div.style.backgroundSize="120%";             
          }
        }
    }
    next.onclick=function ()
    {
        page1.removeAttribute('hidden');
        page2.removeAttribute('hidden');
        page3.removeAttribute('hidden');
        page4.setAttribute('hidden','hidden');
        code();    
    }
    rejouer.onclick=function ()
    {
        window.location.reload();
    }
}
code();