/*
U = {1,2,3,4,5,6,7,8,9,10,11,12,13}
A= {1,2,3,4,7}
B = {3,4,5,6}
Find the set 	(A U B)’

answer : 

 let ,
     U = {1,2,3,4,5,6,7,8,9,10,11,12,13}
     A= {1,2,3,4,7}
     B = {3,4,5,6}

     then , (AUB) = {1,2,3,4,7} U {3,4,5,6}
                  = {1,2,3,4,5,6,7}

    Then ,
     (A U B)’ = U - (AUB)
              ={1,2,3,4,5,6,7,8,9,10,11,12,13} - {1,2,3,4,5,6,7}

              = {8,9,10,11,12,13} (Ans)


*******************************************************

question 2 : 

Find the GCD and LCM of 77 and 121

answer : 
  
    step1 : let two number 77 , 121 
    step2 :  calculate the gcd using Euclidean
             77 ) 121 ( 1
                 - 77
                -------- 
                    44 ) 77 ( 1
                        -44
                       -------  
                         33 ) 44 (1
                              33
                             -----
                              11)33(3 
                                 33
                               ------  
                                   0
     if reminder is 0 then it is the gcd number in this area we see that 11 is the gcd number .

    ans : 11 (GCD)

     Another Process : 

       1.  a =77 ,  b = 121  

            77 / 121 =1

           reminder =  a%b = 77%121 = 44

         2.  a = reminder = 44 
             b  = 77

              a%b = 44 % 77 = 33 
              
              rem = 33 
              a = 44 

              continue same process untill a/b = 0 

        finally we see that  in a = 11 then the process is successfull and calculate the gcd number


Calculate Lcm : 

   furmula =>   GCD X LCM = a X b 

   let GCD = 11 
       a = 77
       b = 121 

       so LCM = (77 x 121) / 11 
            LCM = 847 (answer)
            
              
       

*****************************************************

In a cricket match, you have a squad of 15 players and you need to select 11 for a game. The two opening batsmans are fixed and the rest of the players are flexible. How many batting orders are possible for the game?


 answer : 
  
 if 2 batsman is fixed for openning then , 

                                      a= 15
                                          C
                                            2

nCr = 	
        15!
        ---------------
         2! × (15 - 2)!
        = 	105


                        
            Rest Player is : 13

            remaing player from 11 is = 9 
            nCr =           13!
                    ----------------
                        9! × (13 - 9)!
                        = 	715




            then there possible batting order is : 715 + 105 = 820 answer



         
***************************************************************

If the radius of both of the green circles is 10 cm, find the area of the yellow region (outside of the circles but inside the rectangle)

, 

let rectangle  = length * width 
    circle = 3.1416 * r * r

 here , 
   
 r = 10cm 
 chord(jaa) = 20cm = width 
 then length = 20cm +20cm = 40cm 

 if 2 circle then = 2* (3.1416 * 10 * 10)
                  = 2 * 314.156
                  = 628.312

total rectangle area is = 40 * 20 = 800 

Reminder or yellow portion is = ( 800 - 628.312 )
                              = 171.688 squre_cm (answer)

****************************************************************


Find the 100-th term of the following sequence

3, 10, 17, 24, … 

Also find the sum of the first 100 terms.

answer : 


  here a = 3
       n= 100
       d = 7

nth term = a + (n-1)*d
         = 3 + (100-1)*7
         = 3 + 99*7
         = 696 (answer1)


sum of first 100 terms is : (n/2)*(2*a + (n-1)*d)
                           =50 * (2*3 + 99*7)
                           = 50 * (6+693)
                           = 50*699
                           =34950 (answer)

*****************************************************

Two taps, T1 and T2 can fill an empty tank in 20 minutes and 15 minutes, respectively. They both were turned on to fill the tank, but tap T1 was turned off after some time, and tap T2 took 10 minutes to fill the tank. Find out after how much time tap T1 was turned off?

answer :

for T1 : 

 20 min can fill tank t1 in 1 
 1  ,,  ,,   ,,   ,,   ,, ,, 1/20


 for T2 : 

 15 min can fill tank t2 in 1 
 1  ,,  ,,   ,,   ,,   ,, ,, 1/15
 10 ,,  ,,   ,,   ,,   ,, ,, 10/15 = 2/3 


 so ,

   t1 works it 
               1-2/3
               =(3-2)/3
               =1/3

    
T1 turn off : 

 1 tank fill in it 20 min
1/3 ,,  ,,   ,,   ,,  20 * 1/3 = 6.33 minit  (answer)

*****************************************
Your friend deposited 10,500 BDT in a bank and received 12,150 BDT in total after 3 years.

You deposited 15,100 BDT in another bank and received 18,755 BDT in total after 5 years


for first bank ,

 deposit = 10500
 received with interest = 12150
 
  3 years interest  = (12150 - 10500) =1650 taka 
  1  ,,     ,,      = (1650/3) = 550 taka 


  10500 taka 1 year interst 550 taka
  1      ,,  ,,  ,,   ,,    550/10500 ,,
  100    ,,  ,,  ,,   ,,    550 *100 / 10500 "
                           = 55000/10500 
                           =5.23 %



  for first bank2 ,

 deposit = 18,755
 received with interest = 15,100
 
  3 years interest  = (18755 - 15100) =3655 taka 
  1  ,,     ,,      = (3655/5) = 731 taka 


  18755 taka 1 year interst 731 taka
  1      ,,  ,,  ,,   ,,    731/18755 ,,
  100    ,,  ,,  ,,   ,,    731 *100 / 18755 "
                           = 73100/18755 
                           =3.89 %


    so bank 1 have higher interest rate than bank 2 

  *******************************************

  You have two boxes, box A and box B. 

In box A, there are 5 red balls and 10 green balls.
[বক্স A তে ৫টা লাল বল এবং ১০টা সবুজ বল আছে।]
In box B, there are 3 red balls and 7 green balls.
[বক্স B তে ৩টা লাল বল এবং ৭টা সবুজ বল আছে।]

If you pick a ball from box A, what is the probability that this is a red ball?
[তুমি যদি বক্স Aথেকে একটা বল ওঠাও তাহলে লাল বল উঠার সম্ভাবনা কত]
If you pick a ball from box B, what is the probability that this is a red ball?
[তুমি যদি বক্স Bথেকে একটা বল ওঠাও তাহলে লাল বল উঠার সম্ভাবনা কত]
If you pick one from A and one from B, what is the probability that both of them are red balls?
[তুমি যদি বক্স Aথেকে একটা বল উঠাও এবং বক্স Bথেকে আরও একটা বল উঠাও তাহলে ২টাই একসাথে লাল বল হবার সম্ভাবনা কত?]

a)
 in Box a have , there are 5 red balls and 10 green balls 

 so total ball = 15 
  red = 5
  green = 10

  probability of red in box 1 is = 5/15 = 1/3 (answer)


  b) there are 3 red balls and 7 green balls

  red = 3 
  green = 7

  total ball = 10 

probability of red in box 2 is = 3/10 (answer)


c)  if choose ball in box1 and box 2 then each are red probability is :
 
  box 1 red probability = 1/3
  box 2 red probability = 3/10

  both are red probality = 1/3 * 3/10
                         = 1/10 (answer)


*********************************************

Convert the hexadecimal number denoted by A1E7 to an octal number.

step 1 : convert the hex number in binary with 4 bit 
step 2 : cut the digit form right to left from 3 digit 
step 3 : conver this digit into octal numbe 

calculate : 
A1E7
= A 1 E 7
= 1010 0001 1110 0111
= 1 010 000 111 100 111
= 1 2 0 7 4 7
= 120747 (answer)

**********************************************


Eight students took a test on 30 marks and got the following scores:
	10, 27, 12, 18, 30, 9, 24, 28
What is the mean score and express the score in percentage. Also find the median score.


Mean : 
     sumation of total number / total number of students 

     =(10 + 27 + 12, +18, 30 + 9 + 24 + 28)/8
     = 19.75
     
     30 students mean is 19.75
     1   "        "    "  (19.75 / 30)
     100 "        "    "  (19.75 *100 / 30)
                         = 65.83%  (answer)




Calculate median : 

 1. first sort the item : 
  9 10 12  18 24  27 28 30 

 2. check it even number of count or odd number 
    we see the even number

3. find the two middle position from left and right side 18,24
4. summation of two number 18+24 = 42
5. summation /2  = 42/2 = 21 
6. find the median


*/


