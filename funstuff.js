function yeBoy(d){
  if(d.value[d.value.length-1] === " "){
    d.value = d.value.replace(/\s/g, $("#replacer").val());
  }
}
