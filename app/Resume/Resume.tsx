'use client'

function Resume(props) {
    //def is the name of the content, so that the css can be properly applied
    //for different pages and content types
    return (
        <div className="Resume">
            <div className ="h-auto w-auto flex flex-col items-center">
                <object className="w-[900px] h-[1000px] mt-5" data={"/ross_resume.pdf"} type="application/pdf">
                    <p>This should be a PDF./</p>
                </object>
            </div>
        </div>
    );
}

export default Resume;