
export function ifParamsHasComments(parameters: any, opts: any) {
  const hasComments = parameters.children.find((param: any) => {
    return param.comment;
  });

  if (hasComments) {
    return opts.fn(this);
  } else {
    return opts.inverse(this);
  }
}
