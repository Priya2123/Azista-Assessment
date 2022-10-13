import React, { useState } from "react";
import { Grid, Typography, Button } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const App = () => {
  const [click, setClick] = useState(false);
  console.log("h", window.innerHeight);
  console.log("w", window.innerWidth);
  const datalist = [
    {
      id: 1,
      key: "a",
      value: 5,
    },
    {
      id: 2,
      key: "b",
      value: 3,
    },
    {
      id: 3,
      key: "c",
      value: 0,
    },
  ];

  const [data, setData] = useState(datalist);

  const updateincrement = (e, id) => {
    const newState = data.map((obj) => {
      if (obj.id === id) {
        return { ...obj, value: obj.value + 1 };
      }
      return obj;
    });

    setData(newState);
  };

  const updatedecrement = (e, id) => {
    const newState = data.map((obj) => {
      if (obj.id === id) {
        return { ...obj, value: obj.value - 1 };
      }
      return obj;
    });

    setData(newState);
  };
  return (
    <div>
      <Grid
        container
        lg={12}
        md={12}
        sm={12}
        xs={12}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Grid item lg={12} md={12} sm={12} xs={12} justifyContent={true}>
          <Grid container lg={12} md={12} sm={12} xs={12}>
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "3vh",
              }}
            >
              {" "}
              <div style={{ display: "flex", flexDirection: "column" }}>
                {" "}
                {data?.map((d) => (
                  <>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "4vh",
                      }}
                    >
                      {" "}
                      <Typography variant="h6">{d.key}</Typography>{" "}
                      {d.value === 0 ? (
                        <Typography
                          variant="h6"
                          style={{
                            backgroundColor: "orange",
                            color: "black",
                            padding: "5px",
                            marginLeft: "3vw",
                            borderRadius: "10px",
                            position: "absolute",
                          }}
                        >
                          Zero
                        </Typography>
                      ) : (
                        <Typography
                          variant="h6"
                          style={{
                            backgroundColor: "blue",
                            color: "white",
                            padding: "5px",
                            marginLeft: "3vw",
                            borderRadius: "10px",
                            position: "absolute",
                          }}
                        >
                          {d.value}
                        </Typography>
                      )}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          marginLeft: "15.5vw",
                        }}
                      >
                        {" "}
                        <div
                          onClick={(e) => updateincrement(e, d.id)}
                          style={{
                            backgroundColor: "gray",
                            fontSize: "25px",
                            padding: " 0 8px 0 8px",
                            borderRadius: "10px",
                            color: "white",
                            marginRight: "1.5vw",
                            cursor: "pointer",
                          }}
                        >
                          +
                        </div>
                        {d.value === 0 ? (
                          <div
                            disabled
                            style={{
                              backgroundColor: "lightgray",
                              fontSize: "30px",
                              padding: " 0 10px 0 10px",
                              borderRadius: "10px",
                              color: "white",
                              cursor: "pointer",
                            }}
                          >
                            -
                          </div>
                        ) : (
                          <div
                            style={{
                              backgroundColor: "gray",
                              fontSize: "30px",
                              padding: " 0 10px 0 10px",
                              borderRadius: "10px",
                              color: "white",
                              cursor: "pointer",
                            }}
                            onClick={(e) => updatedecrement(e, d.id)}
                          >
                            -
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </Grid>
          </Grid>
          <Grid
            container
            lg={12}
            md={12}
            style={{ marginTop: "4vh", marginBottom: "2vh" }}
          >
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                onClick={() => setClick(!click)}
                style={{ border: "1px solid black", color: "black" }}
              >
                Show Chart
              </Button>
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {window.innerWidth <= 600 ? (
                <>
                  {click ? (
                    <BarChart
                      // style={{ width: "300vw", height: "50vh" }}
                      width={280}
                      height={250}
                      data={data}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="key" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="value" fill="#82ca9d" />/
                    </BarChart>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <>
                  {click ? (
                    <BarChart
                      // style={{ width: "300vw", height: "50vh" }}
                      width={500}
                      height={300}
                      data={data}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="key" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="value" fill="#82ca9d" />/
                    </BarChart>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
