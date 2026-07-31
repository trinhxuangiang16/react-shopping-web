import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { X, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { formatPrice } from "../../lib/formatPrice";

function Popup(props) {
  const navigate = useNavigate();
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-slate-900/50"
        onClick={props.delete}
      ></div>
      <div className="relative w-full max-w-2xl rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 z-10">
        <button
          className="absolute right-4 top-4 size-8 rounded-full grid place-items-center bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors"
          onClick={props.delete}
          aria-label="Close"
        >
          <X className="size-4" />
        </button>
        <Row className="items-center gy-4">
          <Col xs={12} sm={5}>
            <div className="aspect-square rounded-xl bg-white border border-slate-100 p-4 flex items-center justify-center">
              <img
                src={props.data.img1}
                alt={props.data.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </Col>
          <Col xs={12} sm={7} className="flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-1 block">
                QUICK VIEW
              </span>
              <h5 className="text-xl font-bold text-slate-900 leading-snug">
                {props.data.name}
              </h5>
              <p className="text-2xl font-extrabold text-blue-600 mt-2">
                {formatPrice(props.data.price)}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed mt-3 line-clamp-3">
                {props.data.shortDesc}
              </p>
            </div>
            <Button
              variant="primary"
              className="mt-6 w-full h-11 rounded-xl font-bold flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-md text-sm whitespace-nowrap"
              onClick={() => {
                navigate(`/detail/${props.data.id.$oid || props.data.id}`);
              }}
            >
              <span>View Full Details</span>
              <ArrowRight className="size-4 shrink-0" />
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Popup;

