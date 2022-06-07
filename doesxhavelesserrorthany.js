export function configDoesXHaveLessErrorThanY(canBeConsideredErrorFreeFn, errorTypeNames_) {
  canBeConsideredErrorFree = canBeConsideredErrorFreeFn;
  errorTypeNames = errorTypeNames_
}

export function doesXHaveLessErrorThanY(x, y) {
  if (canBeConsideredErrorFree(x)) {
    return true;
  }
  if (canBeConsideredErrorFree(y)) {
    return false;
  }
  for(const errorTypeName of errorTypeNames) {
    const errorX=x[errorTypeName];
    const errorY=y[errorTypeName];
    if(errorX != errorY) {
      return errorX < errorY;
    }
  }
  return false;
}

let canBeConsideredErrorFree, errorTypeNames
