<?php

namespace App\Http\Controllers;

use App\Models\Bill;
use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\SaveBillRequest;

class BillController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
         $data = Bill::select('bills.id', 'bills.value_before_iva', 'bills.iva', 'bills.total_pay', 'bills.created_at',
         'sellers.name as seller_name', 'sellers.nit as seller_nit', 'buyers.name as buyer_name', 'buyers.nit as buyer_nit')
                ->join('sellers', 'bills.seller_id', '=', 'sellers.id')
                ->join('buyers', 'bills.buyer_id', '=', 'buyers.id')
                ->get();
 
        return $data;//return all date
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SaveBillRequest $request)
    {
        Bill::create($request->all());
        return response()->json([
            'res' => true,
            'msg' => 'Bill create successfully'

        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $dataBill = Bill::find($id)->delete();
        $dataItem = Item::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'res' => true
        ], 200);
    }
}
