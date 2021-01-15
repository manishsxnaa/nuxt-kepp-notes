import  Vue  from  "vue";

Vue.filter("capitalizeFirst",  function(value)  {
  if  (!value)  {
    return  "";
  }
  value  =  value.toString();
  return  value.charAt(0).toUpperCase()  +  value.slice(1);
});

Vue.filter("capitalizeWholeString",  function(value)  {
  if  (!value)  {
    return  "";
  }
  const words = value.split(" ");

  let finalSentence = words.map((word) => { 
      return word[0].toUpperCase() + word.substring(1); 
  }).join(" ");
  return finalSentence;
});

Vue.filter("capitalizeWholeStringCustomized",  function(value)  {
  if  (!value)  {
    return  "";
  }
  const finalSentence = value.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

  return finalSentence;
});

Vue.filter("cutText",  function(value,  length,  suffix)  {
  if  (value.length  >  length)  {
    return  value.substring(0,  length)  +  suffix;
  }  else  {
    return  value;
  }
});