
export const isAllowed = (user, rights) =>
  rights.some(right => user.rights.includes(right));

export const hasRole = (user, roles) =>
  roles.some(page => user.pages.includes(page));