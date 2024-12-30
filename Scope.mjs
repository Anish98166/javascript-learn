//{} = block

// {
//   let a = 10;
//   console.log(a);
// }
// console.log(a);

// A variable will be known within its block from the line where it is defined

// {
//   //parent block
//   let a = 10;
//   {
//     // child block
//     let b = 20;
//     console.log(a);
//   }
//   console.log(b);
// }

// When a variable is called, first it is searched in its own block, if it is not find in that block then it will searched in its parent block and so on.

{
  //parent block

  let a = 10;
  {
    //child block
    let a = 1;
    console.log(a);
  }
  console.log(a);
}
// A variable can not be redefined in the same block but we can redefine same variable in different block.
