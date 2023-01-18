function oneSplit(s, sep)
{
    let ichSep = s.search(sep);
    if (ichSep >= 0)
        return [s.substring(0, ichSep), s.substring(ichSep + sep.length)];
    return [s, ""];
}

function breakAddress(url)
{
    const [protocol, rest] = oneSplit(url, "://");
    const [domain, path] = oneSplit(rest, "/");
    return [protocol, ...domain.split("."), ...path.split("/")];
}

function getDetails()
{
    document.getElementById("result").innerText = breakAddress(document.getElementById("url").value);
}
