/*
Imagine you have written a story and used single quotation marks throughout
to mark pieces of dialogue. Now you want to replace all the dialogue quotes
with double quotes, while keeping the single quotes used in contractions like
aren’t.
Think of a pattern that distinguishes these two kinds of quote usage and
craft a call to the replace method that does the proper replacement.
*/

//ANSWER

/*
Contractions are preceded and followed by a letter, so the idea is to replace just the 
single quotes wich are not followed by a letter
*/
let quotationRegex = /(^|\W)\'|\'(\W|$)/g;


let textStory = "\'And the king\' said \'you shoudn\'t kill yourself, please, don\'t do this\'. That's it. ";
console.log(textStory);
console.log(textStory.replace(quotationRegex,"$1\"$2"));


