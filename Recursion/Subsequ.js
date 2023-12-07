function SubSeq(word,answer)
{
    if(word.length===0)
    {
        console.log(answer);
        return;
    }
    let ch=word.charAt(0);
    SubSeq(word.substring(1),answer)//phle char k liye subsequence 
    SubSeq(word.substring(1),answer+ch)//bache hue 
}

let word="ABC"
SubSeq(word,"");

//dry run
 /*








            --------------------------------
word=0      ch=0        base case hit
ans= -       SubSeq(-,-)
              SubSeq(-,-)       answer=c
    
            --------------------------------
word=c      ch=c
ans= -        SubSeq(-,-)         
              SubSeq(-,c)
           
            --------------------------------
word=bc       ch=b
ans= -        SubSeq(c,-)
              SubSeq(c,b)
            
            --------------------------------
word=abc      ch=a
ans= -        SubSeq(bc,-)<---------------------
              SubSeq(bc,a)
            ---------------------------------
main        SubSeq(abc,-): - blank space 
            ---------------------------------

 */