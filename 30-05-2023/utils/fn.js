export const cE = (type) => document.createElement(type);

export const tweetGen = (tweetData) => {
    const wrapperEl = cE("div");
    const userImageEl = cE("img");
    const contentEl = cE("div");
    const nameEl = cE("span");
    const userNameEl = cE("span");
    const textContentEl = cE("p");
    const reactionsEl = cE("p");
    const imagePlaceholder =
        "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";

    // Corrispettivo optional chaining (?)
    // if(tweetData.user.image) userImageEl.src = tweetData.user.image || imagePlaceholder;

    wrapperEl.className = "tweet";
    userImageEl.src = tweetData.user?.image || imagePlaceholder;
    ("https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg");
    userImageEl.alt = tweetData.user?.username;
    contentEl.className = "tweet__content";

    nameEl.textContent = tweetData.user?.firstName;
    userNameEl.textContent = tweetData.user?.username;
    textContentEl.textContent = tweetData.body;
    reactionsEl.textContent = tweetData.reactions;

    contentEl.append(nameEl, userNameEl, textContentEl, reactionsEl);
    wrapperEl.append(userImageEl, contentEl);

    return wrapperEl;
};