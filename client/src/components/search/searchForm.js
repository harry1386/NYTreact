import React from "react";
import {searchBtn} from "../searchForm";
import input from "./input";

//this is our functional constructor to creat the form to actually search

export const searchForm = props =>
    <div size="col-sm-12">
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
                    />
                    <Input
                        name="startYear"
                        value = {this.state.value}
                    />
                    <Input
                        name="endYear"
                        value = {this.state.value}
                    />
                    <SearchBtn
                        //disabled={!(this.state.searchTerm && this.startYear && this.state.endYear)}
                        onClick={this.handleFormSubmit}
                    >
                    Search
                    </SearchBtn>
                </form>
            </div>
        </div>
    </div>;