import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom"

//route cofig
import routes from "../../routes";

const loading = (
  <div className="text-center">
    <div className="">Loading...</div>
  </div>
)

const Content = () => {
  return (
    <>
      <Suspense fallback={loading}>
        <Routes>
          {routes.map((route, i) => {
            // console.log(route.component)
            return (
              (
                <Route
                  key={i}
                  exact="true"
                  path={route.path}
                  element={<route.component />}
                />
              )
            )
          })}
        </Routes>
      </Suspense>
    </>
  )
}

export default Content
