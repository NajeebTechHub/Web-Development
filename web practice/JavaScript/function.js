// function names(name)
// {
//     console.log('Good Morning '+ name);
// }

// let name1 = 'Najeeb';
// names(name1);
// names('Haseeb');

// function addition(a , b , c)
// {
//     let d = a + b + c;
//     console.log(d);
// }

// addition(3, 7 ,5);



// ALERT
// alert('You Are Entered');

// // PROMPT
// let name3 = prompt('What is your name', 'Guest');
// console.log('Welcome '+name3);

// // CONFIRM
// let deletePost = confirm('Are you want to delete post')
// if(deletePost)
// {
//     alert('Post deleted successfully');
//     console.log('post deleted successfully');
// }
// else{
//     alert('post not deleted');
//     console.log('post not deleted');
// }



// LOOPS IN JAVASCRIPT

// // FOR LOOP
// let i = 0;
// for(i = 0; i < 5; i++)
// {
//     console.log(i);
// }

// // FOR EACH LOOP
// let names = ['Najeeb', 'Haseeb', 'Anees', 'Tariq'];
// names.forEach(function f(element)
// {
//     console.log('Hello '+(element));
// });

// // FOR IN LOOP
// let array = {
//     name : 'Najeeb',
//     age : 23,
//     subject : 'Software Engineering'
// };
// for(key in array)
// {
//     console.log(`${key} of student is ${array[key]}`);
// }


// // FOR OF LOOP
// let student = ['Najeeb', 'Hassan', 'Riaz'];
// for(element of student)
// {
//     console.log('Welcome '+element);
// }

// // WHILE LOOP
// let i = 0;
// while(i < 5)
// {
//     console.log(`${i} is smaller than 5`);
//     i++
// }

// DO WHILE LOOP
let i = 0;
do{
    console.log('Hello student number '+ i);
    i++;
}while(i < 10);