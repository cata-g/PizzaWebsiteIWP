import React from "react";
import Navbar from "../components/Navbar";
import Copyright from "../components/Copyright";
import GalleryItem from "../components/GalleryItem";
import Footer from "../components/Footer";
import imageGallery from "../static/images/gallery/imageGallery.jpg";
import imageGallery1 from "../static/images/gallery/imageGallery1.jpg";
import imageGallery2 from "../static/images/gallery/imageGallery2.jpg";
import imageGallery3 from "../static/images/gallery/imageGallery3.jpg";
import imageGallery4 from "../static/images/gallery/imageGallery4.jpg";
import imageGallery5 from "../static/images/gallery/imageGallery5.jpg";
import imageGallery6 from "../static/images/gallery/imageGallery6.jpg";
import imageGallery7 from "../static/images/gallery/imageGallery7.jpg";
import imageGallery8 from "../static/images/gallery/imageGallery8.jpg";
import imageGallery9 from "../static/images/gallery/imageGallery9.jpg";
import imageGallery10 from "../static/images/gallery/imageGallery10.jpg";
import imageGallery11 from "../static/images/gallery/imageGallery11.jpg";

export default function Gallery() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="p-5">
          <div className="row">
            <GalleryItem imgSrc={imageGallery} col="col-md-6" />
            <GalleryItem imgSrc={imageGallery1} col="col-md-6" />
          </div>
          <div className="row">
            <GalleryItem imgSrc={imageGallery2} col="col-md-3" />
            <GalleryItem imgSrc={imageGallery3} col="col-md-3" />
            <GalleryItem imgSrc={imageGallery4} col="col-md-3" />
            <GalleryItem imgSrc={imageGallery5} col="col-md-3" />
          </div>
          <div className="row">
            <GalleryItem imgSrc={imageGallery6} col="col-md-4" />
            <GalleryItem imgSrc={imageGallery7} col="col-md-4" />
            <GalleryItem imgSrc={imageGallery8} col="col-md-4" />
          </div>
          <div className="row">
            <GalleryItem imgSrc={imageGallery9} col="col-md-6" />
            <GalleryItem imgSrc={imageGallery10} col="col-md-6" />
          </div>
          <div className="row">
            <GalleryItem imgSrc={imageGallery11} col="col-md-12" />
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </>
  );
}
