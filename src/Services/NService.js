import axios from 'axios';
import React, { Component } from 'react';
const USER_API_BASE_URL = "http://localhost:5000/api";

class NService  {

    getStrings(){

        return axios.get(USER_API_BASE_URL);
    }

    getUsers(){
        return axios.get(USER_API_BASE_URL+'/user');
    }

    createUser(user){
        return axios.post(USER_API_BASE_URL+'/user', user);
    }

    loginUser(user){
        return axios.post(USER_API_BASE_URL+'/user'+'/login', user);
    }

    getNotes(){
        return axios.get(USER_API_BASE_URL+'/user'+'/notes');
    }

    createNote(note){
        return axios.post(USER_API_BASE_URL+'/user'+'/notes', note);
    }

    getNotesById(id){
        return axios.get(USER_API_BASE_URL+'/user'+'/notes/'+id);
    }

    updateNote(note, id){
        return axios.put(USER_API_BASE_URL+'/user'+'/notes/'+id, note);
    }

    deleteNote(id){
        return axios.delete(USER_API_BASE_URL+'/user'+'/notes/'+id);
    }

    getNotesByUser(user){
        return axios.post(USER_API_BASE_URL+'/user'+'/notes'+'/notes-by-user', user);
    }
}
export default new NService()

