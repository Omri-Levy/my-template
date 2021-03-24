const resetSensitiveSessionStorage = () => {
  sessionStorage.setItem(`userIds`, JSON.stringify([]));
  sessionStorage.setItem(`checkedItems`, JSON.stringify([false]));
};

export default resetSensitiveSessionStorage;
