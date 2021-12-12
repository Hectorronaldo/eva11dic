import React from "react";
import App from "../App";
import { useState } from "react";



const Info = () =>{
    const [datos, setDatos] = useState("");

    function datosClear(){
        setDatos("");
    }
    function clicDatos (val) {
        setDatos(
        <div className="informacion">
            <div className="top-conter">
                <div className="left-top"><h1>Acerca de la calculadora</h1>
                <h2>Esta claculadora fue diseñada confines eduactivos por el alumno Hector Ronaldo
                    del Campus Uvg Campache, en react.js con el lenguaje javaScrip, react, html, Css, para
                    la precentación del proyecto parte 2, de la asiginatura Programación Estrucutrada.
                </h2>
                <h3>By: ronal</h3>
                </div>  
                <div className="ring-top"><img src="https://universidadesdemexico.mx/logos/original/logo-universidad-valle-del-grijalva.webp" alt="" 
                width={250} height={200}></img></div>           
            </div>
            <div className="down-conter">
            <div className="left-down"><h1>Funciones de la calculadora</h1>
            <h2>La calculadora cuenta con las operaciones basicas como sumar,
                restar, dividir, multiplicar, sacar porsentajes, tambien cuenta con un bonton de borrado "DEL".
            </h2>
            </div>
            <div className="center-down"><h1>Como usarla</h1>
            <h2>Para utilizar la calucladora, es nesesario tner en cuenta que solo pondemos hacer una operacion de dos
                datos, ejemplo: 16 + 196,  nose puede hacer de esta forma 20+ 1 * 27.</h2></div>           
            <div className="ring-down"><h1>Esperamos que le sea de ayuda, proximanete se estara añadiendo mas funciones</h1></div>           
            </div>
        </div>
        );
      }    
    
    return (
        <div className="clicbtn">
            <button onClick={() => {clicDatos()}} className="bontuno">Mostrar Información</button>
            <button onClick={() => {datosClear()}} className="bont">Mostrar menos</button>
            <div>{datos}</div>
        </div>
    
    );

}
export default Info;



