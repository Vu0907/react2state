import React, { Component } from "react";

export default class Glasses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listGlasses: [
        {
          id: 1,
          price: 30,
          name: "GUCCI G8850U",
          url: "./glassesImage/v1.png",
          src: "./glassesImage/g1.jpg",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 2,
          price: 50,
          name: "GUCCI G8759H",
          url: "./glassesImage/v2.png",
          src: "./glassesImage/g2.jpg",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 3,
          price: 30,
          name: "DIOR D6700HQ",
          url: "./glassesImage/v3.png",
          src: "./glassesImage/g3.jpg",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 4,
          price: 70,
          name: "DIOR D6005U",
          url: "./glassesImage/v4.png",
          src: "./glassesImage/g4.jpg",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 5,
          price: 40,
          name: "PRADA P8750",
          url: "./glassesImage/v5.png",
          src: "./glassesImage/g5.jpg",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 6,
          price: 60,
          name: "PRADA P9700",
          url: "./glassesImage/v6.png",
          src: "./glassesImage/g6.jpg",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 7,
          price: 80,
          name: "FENDI F8750",
          url: "./glassesImage/v7.png",
          src: "./glassesImage/g7.jpg",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 8,
          price: 100,
          name: "FENDI F8500",
          url: "./glassesImage/v8.png",
          src: "./glassesImage/g8.jpg",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 9,
          price: 60,
          name: "FENDI F4300",
          url: "./glassesImage/v9.png",
          src: "./glassesImage/g9.jpg",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
      ],
    };
  }

  listGlassesClick = (url) => {
    this.setState({ url });
  };

  renderListGlass = () => {
    const { listGlasses } = this.state;
    return listGlasses.map((glass) => {
      return (
        <img
          alt=""
          key={glass.id}
          src={glass.src}
          className="col-4"
          onClick={() => {
            this.listGlassesClick(glass.url);
          }}
        />
      );
    });
  };

  render() {
    const { url } = this.state;
    return (
      <>
        <div className="bg">
          <div className="container vglasses py-3">
            <h3 className="text-center mb-4">CHANGE GLASSES</h3>
            <div className="row justify-content-between">
              <div className="col-6 vglasses__left">
                <div className="row" id="vglassesList">
                  {this.renderListGlass()}
                </div>
              </div>
              <div className="col-5 vglasses__right p-0">
                <div className="vglasses__card">
                  <div className="vglasses__model" id="avatar">
                    <img src={url} alt="" />
                  </div>
                  <div id="glassesInfo" className="vglasses__info" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
