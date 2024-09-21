
interface EksempelProps {
    headerText: String;
    footerText: String;
}


function Eksempel({headerText, footerText}: EksempelProps) {

    function makeTextLowerCase(text:String) {
        return text.toLowerCase();
    }

    let lowerCaseHeaderText = makeTextLowerCase(headerText);
    
    return (
        <div>
            <h1>{lowerCaseHeaderText}</h1>
            <h2>{footerText}</h2>
        </div>
    )
}


/*

headerText = Astro.props;

function omformHeaderText() {
    headerText = headerText.toLowerCase();
}

---

<html>
</html>

<style>

</style>


*/