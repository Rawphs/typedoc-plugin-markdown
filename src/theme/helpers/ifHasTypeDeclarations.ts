
export function ifHasTypeDeclarations(parameters: any, opts: any) {
  const hasTypeDeclaration = parameters.find((param: any) => {
    return param.type.declaration && param.type.declaration.children;
  });
  if (hasTypeDeclaration) {
    return opts.inverse(this);
  } else {
    return opts.fn(this);
  }
}
