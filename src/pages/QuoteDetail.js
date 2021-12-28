import React, { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const DUMMY_QUOTES =[
  {id:'q1', author: 'kee', text:'Learning'},
  {id:'q2', author: 'ee', text:'Learninsnkxng'},
];
const QuoteDetail = () => {

  const params = useParams();
  const quote = DUMMY_QUOTES.find(quote=>quote.id === params.quoteId)
  //if we don't have the quote in the ID we've in the URL
  if(!quote){
    <p> No quote found</p>
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author}/>
      {/* params.quoteId because thats equal to the id we've in the url and that's the name we have in the app file */}
      <Route path={`/quotes/${params.quoteId}/comments`}>
          <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
