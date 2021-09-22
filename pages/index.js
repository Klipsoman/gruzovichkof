import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    color: "red"
  }
})


export default function Page({id, options, count, color, data}) {
  console.log(data)
  return (
    <MyWonderfulComponent
      id={id}
      options={options}
      count={count}
      color={color}
      data={data}
    >
      I'm text from a component
    </MyWonderfulComponent>
  );
}

function MyWonderfulComponent({id, options, children, count, color, data, other}) {
  // const { count } = other;  ???
  const [ summ, setSumm ] = useState(count);
  const styless = useStyles()
  
  useEffect(() => {
    if (
      id &&
      options &&
      options.params &&
      options.params.fields &&
      options.params.fields.isDynamic
    ) {
      setSumm(summ + 1);
    }
  });

  return (
    <>
      <h1 className={styless.root}>Hello World!</h1>
      <Grid container>
        <Grid item xs={12}>
          {children}
        </Grid>
        <Grid item>{summ}</Grid>
      </Grid>
    </>
  );
}

export async function getStaticProps(context) {
  const hello = "Hello from SSR"
  console.log(hello)
  return {
    props: {
      data: hello
    }, 
  }
}




