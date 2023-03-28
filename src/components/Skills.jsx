import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div
      id="skills"
      className="md:pl-20 m-auto p-4 py-5 bg-gradient-to-tr md:m-auto lg:h-auto lg:w-screen sm:h-auto sm:w-screen bg-fixed bg-cover bg-center from-[#29bc8d] to-[#2988bc]"
    >
      <div className="max-w-[1240px] m-auto flex flex-col py-5">
        <h1 className="text-4xl font-bold text-center text-[#f1f3f7]">
          Skills
        </h1>
        <div className="container m-auto grid grid-rows-1 sm:grid-cols-[30%_20%_30%_20%] sm:gap-20 pt-5 sm:pt-20">
          <h3 className="text-3xl text-center sm:text-justify py-5 font-medium text-white">
            Languages:
          </h3>
          {/* <div className="flex flex-row justify-around"> */}
          <div className="relative flex p-8 sm:text-left justify-center h-auto w-full shadow-xl shadow-gray-800 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#ebedf3]">
            <a
              href="https://www.w3schools.com/cpp/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                alt="cplusplus"
                width="70"
                height="70"
              />
            </a>
            <a href="https://www.python.org" target="_blank" rel="noreferrer">
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                alt="python"
                width="70"
                height="70"
              />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="javascript"
                width="70"
                height="70"
              />
            </a>
          </div>
          <h3 className="text-3xl text-center sm:text-justify py-5 font-medium text-white">
            Databases
          </h3>
          <div className="relative flex p-5 justify-center h-auto w-full shadow-xl shadow-gray-800 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#ebedf3]">
            <a
              href="https://www.postgresql.org"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                alt="postgresql"
                width="70"
                height="70"
              />
            </a>
            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                alt="mongodb"
                width="70"
                height="70"
              />
            </a>
            <a
              href="https://firebase.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                alt="firebase"
                width="70"
                height="70"
              />
            </a>
          </div>

          <h3 className="text-3xl text-center sm:text-justify py-5  font-medium text-white">
            Frontend Development:
          </h3>
          <div className="relative flex p-5 justify-center h-auto w-full shadow-xl shadow-gray-800 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#ebedf3]">
            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="html5"
                width="70"
                height="70"
              />
            </a>
            <a href="https://redux.js.org" target="_blank" rel="noreferrer">
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                alt="redux"
                width="70"
                height="70"
              />
            </a>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="react"
                width="70"
                height="70"
              />
            </a>
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              <Image
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="tailwind"
                width="70"
                height="70"
              />
            </a>
            <a
              href="https://www.w3schools.com/css/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="css3"
                width="70"
                height="70"
              />
            </a>
          </div>

          <h3 className="text-3xl text-center sm:text-justify py-5  font-medium text-white">
            Backend Development:
          </h3>
          <div className="relative flex p-5 justify-center h-auto w-full shadow-xl shadow-gray-800 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#ebedf3]">
            <a
              href="https://flask.palletsprojects.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg"
                alt="flask"
                width="70"
                height="70"
              />
            </a>
            <a href="https://nodejs.org" target="_blank" rel="noreferrer">
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="nodejs"
                width="70"
                height="70"
              />
            </a>
            <a href="https://graphql.org" target="_blank" rel="noreferrer">
              <Image
                src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg"
                alt="graphql"
                width="70"
                height="70"
              />
            </a>
            <a href="https://expressjs.com" target="_blank" rel="noreferrer">
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                alt="express"
                width="70"
                height="70"
              />
            </a>
          </div>

          <h3 className="text-3xl text-center sm:text-justify py-5 font-medium text-white">
            Data Visualization:
          </h3>
          <div className="relative flex p-5 justify-center h-auto w-full shadow-xl shadow-gray-800 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#ebedf3]">
            <a
              href="https://seaborn.pydata.org/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="https://seaborn.pydata.org/_images/logo-mark-lightbg.svg"
                alt="seaborn"
                width="70"
                height="70"
              />
            </a>
            <a href="https://d3js.org/" target="_blank" rel="noreferrer">
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/d3js/d3js-original.svg"
                alt="d3js"
                width="70"
                height="70"
              />
            </a>
          </div>

          <h3 className="text-3xl text-center sm:text-justify py-5 font-medium text-white">
            AI/ML/CV:
          </h3>
          <div className="relative flex p-5 justify-start h-auto w-full shadow-xl shadow-gray-800 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#ebedf3]">
            <a href="https://opencv.org/" target="_blank" rel="noreferrer">
              <Image
                src="https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg"
                alt="opencv"
                width="70"
                height="70"
              />
            </a>
            <a
              href="https://scikit-learn.org/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
                alt="scikit_learn"
                width="70"
                height="70"
              />
            </a>
            <a
              href="https://pandas.pydata.org/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg"
                alt="pandas"
                width="70"
                height="70"
              />
            </a>
            <a
              href="https://www.tensorflow.org"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg"
                alt="tensorflow"
                width="70"
                height="70"
              />
            </a>
          </div>

          <h3 className="text-3xl text-center sm:text-justify py-5 font-medium text-white">
            Tools:
          </h3>
          <div className="relative flex p-5 justify-start h-auto w-full shadow-xl shadow-gray-800 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#ebedf3]">
            <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
                alt="docker"
                width="70"
                height="70"
              />
            </a>
            <a href="https://cloud.google.com" target="_blank" rel="noreferrer">
              <Image
                src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg"
                alt="gcp"
                width="70"
                height="70"
              />
            </a>
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
              <Image
                src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                alt="git"
                width="70"
                height="70"
              />
            </a>
            <a href="https://www.linux.org/" target="_blank" rel="noreferrer">
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
                alt="linux"
                width="70"
                height="70"
              />
            </a>
            <a href="https://postman.com" target="_blank" rel="noreferrer">
              <Image
                src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                alt="postman"
                width="70"
                height="70"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
