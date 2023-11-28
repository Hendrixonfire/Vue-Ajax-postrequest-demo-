<template>
    <div>
        <h1> Ajax Post Demo</h1>
        <div class="flow">
        <input id="inputField" type="text" name="val" v-bind:value="myInput">
        <button type="button" class="imageButton" id="glow-on-hover" @click="loadDoc()">POST</button>
        </div>
        <div id="receivedData">

        </div>

        
    </div>
    
    </template>


<script> 
import axios from "axios";

export default {
    data(){
        return {
            obj: [],
            objTwo: [],
            data: '',
            myInput:"Some data"
           
        };
    },
   
    methods: {

        loadDoc() {
        const xhr = new XMLHttpRequest();
        console.log(xhr);
        const formData = new FormData();
        const myInput = document.getElementById("inputField");
     
        formData.append('val', myInput.value);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200){
                this.data = JSON.parse(this.responseText);
                console.log(this.data);
                document.getElementById("receivedData").innerText = this.data.form.val + " received";
            }
            else if(xhr.readyState === 4 && xhr.status === 0){
                 document.getElementById("receivedData").innerText = "Timeout Error: Try again!";
            }
        
            }            
        xhr.open("POST", "https://httpbin.org/post", true);
        xhr.send(formData);
    }

    
  
    }
};






</script>

