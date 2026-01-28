
// problem-1. 1 to 30 but after 15 loop will stop

// for (let i = 1; i <= 30; i++)
// {
//     if (i > 15)
//     {
//         break;
//     }
//     console.log(i);
// }

// problem 2. 1 to 40, but skip that are divisible by 7 number


// for (let i = 1; i <= 40; i++)
// {
//     if (i % 7 ==0)
//     {
//         continue;
//     }
//     console.log(i);
// }


// 3. 1 to 15 without 9

// for (let i = 1; i <= 15; i++)
// {
//     if (i == 9)
//     {
//         continue;
//     }
//     console.log(i);
// }

// prblm_4. same as 3


// problem_4. 1 to 25, without 3 divisible numbers

// for (let i = 1; i <= 25; i++)
// {
//     if (i % 3 ==0)
//     {
//         continue;
//     }
//     console.log(i);
// }


// problem_6. 91 to 120, but program will be stop when find any 10 divisible number


for (let i = 91; i <= 120; i++)
{
    if (i % 10 ==0)
    {
        break;
    }
    console.log(i);
}
