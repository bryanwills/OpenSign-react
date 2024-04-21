import React from "react";
import { themeColor } from "../../constant/const";
import RecipientList from "./RecipientList";
import { Tooltip } from "react-tooltip";
import { useSelector } from "react-redux";

function SignerListPlace(props) {
  const isHeader = useSelector((state) => state.showHeader);
  return (
    <div>
      <div
        style={{ backgroundColor: themeColor }}
        className={`bg-[${themeColor}] p-[5px] 2xl:p-[15px] text-[15px] text-white  2xl:text-[35px]`}
      >
        <span>
          {props.title ? props.title : "Recipients"}
          <span className="absolute text-xs z-[30] mt-1 ml-0.5">
            {props?.title === "Roles" && (
              <>
                <a data-tooltip-id="my-tooltip">
                  <sup>
                    <i className="fa-solid fa-question rounded-full border-[#FFFFFF] textt-[#FFFFFF] text-[11px] 2xl:text-[20px] border-[1.5px]  py-[1px] px-[3px]"></i>
                  </sup>
                </a>
                <Tooltip id="my-tooltip">
                  <div className="max-w-[450px] 2xl:max-w-[500px] 2xl:text-[20px] p-[1px]">
                    <p className="font-bold pb-[1px]">
                      What are template roles?
                    </p>
                    <p>
                      Begin by specifying each role needed for the completion of
                      the document. Think about the parties involved in the
                      signing process and what their responsibilities are.
                      Common roles include HR for internal documents, Customer
                      for agreements or Vendor for business agreements.{" "}
                    </p>
                    <p className="font-bold">
                      Why pre-attach users to some roles?
                    </p>
                    <p>
                      For roles that consistently involve the same individual
                      (e.g., the CEO&apos;s signature on employee offer
                      letters), you can pre-attach a user to a role within the
                      template. This step is optional but recommended for
                      efficiency and consistency across documents.
                    </p>
                    <p className="font-bold">
                      When do i specify the user attached to each role?
                    </p>
                    <p>
                      When you create a document from your template, you&apos;ll
                      be prompted to attach users to each defined role. If a
                      role already has a user attached, this will be pre-filled,
                      but you can modify it as needed before sending out the
                      document.
                    </p>
                  </div>
                </Tooltip>
              </>
            )}
          </span>
        </span>
      </div>

      <div className=" autoSignScroll max-h-[180px] 2xl:max-h-[250px]">
        <RecipientList {...props} isHeader={isHeader} />
      </div>
      {props.handleAddSigner ? (
        <div
          data-tut="reactourAddbtn"
          className="p-[10px] my-[2px]  2xl:p-[28px] flex flex-row items-center justify-center border-[1px] border-[#47a3ad] hover:bg-[#47a3ad] text-[#47a3ad]  hover:text-white cursor-pointer"
          onClick={() => props.handleAddSigner()}
          style={{
            opacity: props.isMailSend && "0.5",
            pointerEvents: props.isMailSend && "none"
          }}
        >
          <i className="fa-solid fa-plus  2xl:text-[35px]"></i>
          <span className="text-[1.3vw] ml-[2px] mr-[2px]">Add role</span>
        </div>
      ) : (
        <div
          data-tut="reactourAddbtn"
          className="p-[10px] 2xl:p-[28px] my-[2px] flex flex-row items-center justify-center border-[1px] border-[#47a3ad] hover:bg-[#47a3ad] text-[#47a3ad]  hover:text-white cursor-pointer"
          onClick={() => props.setIsAddSigner(true)}
          style={{
            opacity: props.isMailSend && "0.5",
            pointerEvents: props.isMailSend && "none"
          }}
        >
          <i className="fa-solid fa-plus md:text-[10px] 2xl:text-[35px] "></i>
          <span className="text-[1.3vw] ml-[2px]">Add recipients</span>
        </div>
      )}
    </div>
  );
}

export default SignerListPlace;
