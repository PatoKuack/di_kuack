import React from "react";

function withSomething(WrappedComponent) {
  return function WrappedCompoinentWithStarcraft() {
    setTimeout(() => {
      return (
        <WrappedComponent></WrappedComponent>
      );
    }, 1500);
  }
}

export { withStarcraft }
