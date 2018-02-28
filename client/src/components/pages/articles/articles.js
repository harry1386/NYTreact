import React, {Component} from "react";
import {searchBtn} from "../../search";
import {Btn} from "../../articlesList";
import Input from "../../search/input";
import Header from "../../header/Header";
import {List, Item} from "../../aticlesList";
import API from "../../../utils/API";
import "./Articles.css";
import axios from 'axios';


class Articles extends Component{

    state={
        articles: [
            {
                title: "Best Team EVER",
                publishedDate: "2028-02-02",
                url: "wwww.packers.com"
            },
            {
                title: "This Place is DOPE",
                publishedDate: "2012-12-25",
                url: "https://www.theonion.com/"
            }

        ],
        title: "",
        publishedDate: "",
        url: ""
    };

    handleFormSubmit = (event, searchTerm, startDate, endDate) =>{
        event.preventDefault();
        let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?api-key=9011d789769d4ef0bc18f8badc0f89db&q=politics&begin_date=20101212&end_date=20171212'
    

        axios.get(url)
            .then(response => {
                console.log(response);
             });
        console.log("need api call");
        console.log("lots to change here with the articles array and state");
    };

    saveArticle = article =>{       
        console.log("logic to save the book from mongodb")
        API.saveArticle({
            title: this.state.title,
            date: this.state.publishedDate,
            url: this.state.url
          })
            .then(console.log("Successfully inserted to database."))
            
            .catch(err => console.log(err));
    };

    deleteArticle = event =>{
        event.preventDefault();
        console.log("Add logic to delete the book from mongodb")
    };

    render(){
        return(
            <div className="col-xs-12">
                <div className="container text-center">
                    <Header mainText="NYT Search"/>
                </div>

                <div className="container">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title">
                                <strong>Search Parameters</strong>
                            </h3>
                        </div>
                        <div className="panel-body">
                            <form>
                                <Input
                                    name="searchTerm"
                                    placeholder ="Search Term"
                                    value = {this.state.value}
                                    className ="searchTerm"
                                />
                                <Input
                                    name="startYear"
                                    value = {this.state.value}
                                />
                                <Input
                                    name="endYear"
                                    value = {this.state.value}
                                />
                                <searchBtn
                                    onClick={this.handleFormSubmit}
                                >
                                    Search
                                </searchBtn>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title">
                                <strong>Results</strong>
                            </h3>
                        </div>
                        <div className="panel-body">
                            {this.state.articles.length ? (
                                <List>
                                    {this.state.articles.map(article => (
                                        <Item key={article._id}>                                    
                                                <strong>
                                                    {article.title} published {article.publishedDate}
                                                </strong>
                                                <p> Article URL: {article.url} </p>
                                            <Btn onClick={() => this.saveArticle(article)}>
                                                Save
                                            </Btn>
                                        </Item>
                            ))}
                                </List>
                            ) : (
                                <h3>No Results to Display</h3>
                            )}
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title">
                                <strong>Saved Articles</strong>
                            </h3>
                        </div>
                        <div className="panel-body">
                        {this.state.articles.length ? (
                        <List>
                            {this.state.articles.map(article => (
                                <Item key={article._id}>                                    
                                        <strong>
                                            {article.title} published {article.publishedDate}
                                        </strong>
                                        <p> Article URL: {article.url} </p>
                                    <Btn onClick={() => this.deleteBook(article._id)}>
                                        Delete
                                    </Btn>
                                </Item>
                            ))}
                        </List>
                            ) : (
                                <h3>Nothin Here Dude</h3>
                            )}
                        </div>
                    </div>               
                </div>

            </div>
        );
    }//end of render function


}//end of Articles class

export default Articles;